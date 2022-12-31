import React, {useState, useEffect, useMemo} from 'react';
import styled, {keyframes} from 'styled-components';
import APIURL from '../api/APIURL';
import ApiCall from '../api/ApiCall';
import Youtube from 'react-youtube';


function Main() {
    const [globalHeight, setGlobalHeight] = useState('');
    const [playVideo, setPlayVideo] = useState(null);
    const [opacityValue, setOpacityValue] = useState(false);
    const [playingId,setPlayingId] = useState<null | number>(null);

    const moodArr = useMemo(() => {

        return [{id: 1, mood: '행복', value: '행복한 음악', img: require('../../styles/image/행복.png'), color: '#F4E3DC'},
            {id: 2, mood: '슬픔', value: '슬픈 음악', img: require('../../styles/image/슬픔.png'), color: '#0067A3'},
            {id: 3, mood: '고독', value: '고독한 음악', img: require('../../styles/image/고독함.png'), color: '#808080'},
            {id: 4, mood: '쾌활', value: '쾌활한 음악', img: require('../../styles/image/쾌활함.png'), color: '#FFFF00'},
            {id: 5, mood: '사랑', value: '사랑 음악', img: require('../../styles/image/사랑.png'), color: '#A83F39'},
            {id: 6, mood: '힘듦', value: '힘들때 듣는 음악', img: require('../../styles/image/힘듦.png'), color: '#8B00FF'},]
    }, [])

    useEffect(() => {
        calcGlbalHeight();
    }, [])


    useEffect(() => {

        window.addEventListener('resize', calcGlbalHeight);

        return () => window.removeEventListener('resize', calcGlbalHeight);

    }, [playVideo])

    const calcGlbalHeight = () => {
        setTimeout(() => {
            setGlobalHeight(`${window.innerHeight}px`);
        }, 1000)
    }

    const getList = async (value: string) => {
        setOpacityValue(false);

        setTimeout(() => {
            setOpacityValue(true);
        }, 3000)

        try {
            const response = await ApiCall(APIURL.search + `?part=snippet&q=${value}&maxResults=10&order=viewCount&key=AIzaSyCZtze9Mpjl7KnNA7RiXJYmg5LJVBu5nqo`);

            const {data} = response;

            const {items} = data;

            const random = Math.floor(Math.random() * 9);


            setPlayVideo(items[random]?.id?.videoId);

        } catch (e) {
            console.error(e);
        }

    }

    return (
        <Background>
            {playVideo &&
                <VideoWrap>
                    <Youtube videoId={playVideo}
                             opts={{
                                 width: '100%',
                                 height: globalHeight,
                                 playerVars: {autoplay: 1, rel: 0, modestbranding: 1, controls: 0}
                             }}/>
                </VideoWrap>}
            <Container>

                <MoodWrap opacityValue={opacityValue}>
                    {moodArr.map((item, index) => {
                        return (
                            <MoodBox key={item.id}
                                     onClick={() => {
                                         getList(item.value);
                                         setPlayingId(item.id);
                                     }}
                                     color={item?.color}
                                     playing={playingId === item.id ? true : false}
                            >
                                <MoodImg src={item.img.default.src}/>
                                <div/>
                            </MoodBox>
                        )
                    })}
                </MoodWrap>
            </Container>
        </Background>
    )
}

export default Main;

const boxFadeIn = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.3;
  }
`;

const boxFadeOut = keyframes`
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
`

const Background = styled.div`
  width:100%;
  height:100vh;
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;

`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;


`;

const VideoWrap = styled.div`

  position: absolute;
  z-Index: -99;
  width: 100%;
  height: 100vh;


`;

const MoodWrap = styled.div<{ opacityValue?: boolean }>`
  width: 80%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;

  opacity: ${props => props.opacityValue ? 0.3 : 1};

  animation: ${props => props.opacityValue ? boxFadeIn : boxFadeOut} 3s;


  &:hover {
    opacity: 1;
  }
`;

const MoodBox = styled.div<{ color?: string , playing?:boolean }>`
  position:relative;
  width: 30%;
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
  box-shadow: 5px 5px 5px 0;
  
  
  div{
    display:${props => props.playing ? 'block' : 'none'};
    position:absolute;
    width:100%;
    height:25vh;
    background-color: rgba(0,0,0,0.5);
    border:1px solid black;
  }
  
  &:hover{
    div{
      display:flex;
    }
    
  }

`;

const MoodImg = styled.img.attrs({ alt:'감정 이미지'})`
  width:50px;
  height:50px;
`
