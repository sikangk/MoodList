import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center

`;

const MoodWrap = styled.div`
    width:80%;
    height:50vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
`;

const MoodBox = styled.div`
    
    width:20%;
    height:25vh;
    border:1px solid black;
    display:flex;
    justify-content:center;
    align-items:center
  
`;


const moodArr = [
    { id: 1, mood: '행복' },
    { id: 2, mood: '슬픔' },
    { id: 3, mood: '짜증' },
    { id: 4, mood: '분노' },
    { id: 5, mood: '우울' },
    { id: 6, mood: '신남' },
    { id: 7, mood: '질투' },
    { id: 7, mood: '창피' }
]


function Main() {
    return (
        <Container>
            <MoodWrap>
                {moodArr.map((item, index) => {
                    return (
                        <MoodBox key={item.id}>
                            {item.mood}
                        </MoodBox>
                    )
                })}
            </MoodWrap>
        </Container>
    )
}

export default Main;
