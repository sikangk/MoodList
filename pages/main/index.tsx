import React, {useState, useEffect} from 'react';
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
`;

const MoodBox = styled.div`

  width: 20%;
  height: 25vh;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;


const moodArr = [
    {id: 1, mood: '행복', value: '행복할때 듣는 노래'},
    {id: 2, mood: '슬픔', value: '슬플때 듣는 노래'},
    {id: 3, mood: '짜증', value: '짜증날때 듣는 노래'},
    {id: 4, mood: '분노', value: '화날때 듣는 노래'},
    {id: 5, mood: '우울', value: '우울할때 듣는 노래'},
    {id: 6, mood: '신남', value: '신나는 음악'},
    {id: 7, mood: '질투', value: '질투날때 듣는 노래'},
    {id: 8, mood: '창피', value: '창피할때 듣는 노래'}
]


function Main() {
    const [playList, setPlayList] = useState([]);
    const [globalHeight, setGlobalHeight] = useState(0);
    const [playVideo, setPlayVideo] = useState(null);


    useEffect(() => {

        setTimeout(() => {
            setGlobalHeight(window.innerHeight);

        }, 1000)


    }, [])

    const getList = async (value: string) => {


        try {
            const response = await ApiCall(APIURL.search + `?part=snippet&q=${value}&order=viewCount&key=AIzaSyCZtze9Mpjl7KnNA7RiXJYmg5LJVBu5nqo`);

            const {data} = response;

            const {items} = data;

            const random = Math.floor(Math.random() * 4);

            console.log(random, 'ramdon');

            console.log(items[random].id.videoId, 'data');
            setPlayList(data);
            setPlayVideo(items[random]?.id?.videoId);

            console.log(response, 'response');

            console.log(playList, 'playList');

        } catch (e) {
            console.error(e);
        }
    }


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
                style={{position: 'absolute', zIndex: -99, width: '100%', height: '100vh', border: '1px solid black'}}>


                <Youtube videoId={playVideo}
                         style={{height: globalHeight}} opts={{width: '100%', playerVars: {autoplay: 1,}}}/>
            </div>}
            <Container>

                <MoodWrap>
                    {moodArr.map((item, index) => {
                        return (
                            <MoodBox key={item.id} onClick={() => getList(item.value)}>
                                {item.mood}
                            </MoodBox>
                        )
                    })}
                </MoodWrap>
            </Container>
        </div>
    )
}

export default Main;
