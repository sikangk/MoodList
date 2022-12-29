import React, {useState, useEffect, useMemo} from 'react';
import styled from 'styled-components';
import APIURL from '../api/APIURL';
import ApiCall from '../api/ApiCall';
import Youtube from 'react-youtube';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;


`;

const MoodWrap = styled.div`
  width: 80%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
`;

const MoodBox = styled.div<{color?:string,playing?:string | null}>`

  width: 30%;
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};

  &:hover {
    opacity: 1;
  }
`;


function Main() {
    const [globalHeight, setGlobalHeight] = useState(0);
    const [playVideo, setPlayVideo] = useState(null);

    const moodArr = useMemo(() => {

        return [{id: 1, mood: '행복', value: '행복한 음악', img: require('../../styles/image/행복.png'),color:'#F4E3DC'},
            {id: 2, mood: '슬픔', value: '슬픈 음악', img: require('../../styles/image/슬픔.png'),color:'#0067A3'},
            {id: 3, mood: '고독', value: '고독한 음악', img: require('../../styles/image/고독함.png'),color:'#808080'},
            {id: 4, mood: '쾌활', value: '쾌활한 음악', img: require('../../styles/image/쾌활함.png'),color:'#FFFF00'},
            {id: 5, mood: '사랑', value: '사랑 음악', img: require('../../styles/image/사랑.png'),color:'#A83F39'},
            {id: 6, mood: '힘듦', value: '힘들때 듣는 음악', img: require('../../styles/image/힘듦.png'),color:'#8B00FF'},]
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
            console.log(window.innerHeight, '?????')

        }, 1000)
    }

    const getList = async (value: string) => {


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

    console.log(globalHeight, 'globalHeight');

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {playVideo && <div
                style={{position: 'absolute', zIndex: -99, width: '100%', height: '100vh'}}>


                <Youtube videoId={playVideo}
                         opts={{
                             width: '100%',
                             height: globalHeight,
                             playerVars: {autoplay: 1, rel: 0, modestbranding: 1, controls: 0}
                         }}/>
            </div>}
            <Container>

                <MoodWrap>
                    {moodArr.map((item, index) => {
                        console.log(item.img,'ite,OIm,ge');
                        return (
                            <MoodBox key={item.id} onClick={() => getList(item.value)} color={item?.color}>
                                <img style={{width:50,height:50}}  src={item.img.default.src}/>
                            </MoodBox>
                        )
                    })}
                </MoodWrap>
            </Container>
        </div>
    )
}

export default Main;
