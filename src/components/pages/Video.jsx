import React from "react";
import styled from "styled-components";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ShareIcon from "@mui/icons-material/Share";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Comments from "./Comments";
const Container = styled.div`
  display: flex;
  gap: 24px;
  padding: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const Recommendation = styled.div`
  flex: 2;
`;

const VideoWrapper = styled.div``;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
  margin-top: 20px;
`;
const Description = styled.span`
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 10px;
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 5px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Watch = styled.div`
  display: flex;
  gap: 20px;
`;
const Channel = styled.div`
  font-size: 14px;
  border: 1px solid #ccc;
  display: flex;
  padding: 10px;
  width: 50%;
  gap: 10px;
  border-radius: 5px;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;
const Texts = styled.div`
  color: ${({ theme }) => theme.textSoft};
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const ChannelName = styled.span`
  color: ${({ theme }) => theme.text};
`;
const Subscribe = styled.span``;
const ButtonSub = styled.button`
  margin-left: auto;
  color: white;
  background-color: red;
  font-weight: 700;
  border: none;
  border-radius: 3px;
  padding: 0px 20px;
  cursor: pointer;
`;
const TopComment = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="700"
            src="https://www.youtube.com/embed/GspDybPhOeY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Lorem ipsum dolor sit amet consectetur adipisicing elit</Title>
        <Details>
          <Description>750.000 views - 21/8/2022</Description>
          <Buttons>
            <Button>
              <ThumbUpOffAltIcon /> <span>123</span>
            </Button>
            <Button>
              <ThumbDownOffAltIcon /> <span>456</span>
            </Button>
            <Button>
              <ShareIcon /> <span>Chia sẻ</span>
            </Button>

            <Button>
              <ContentCutIcon />
              <span>Tạo đoạn video</span>
            </Button>
            <Button>
              <PlaylistAddIcon />
              <span>Thêm</span>
            </Button>
            <Button>
              <MoreHorizIcon />
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Watch>
          <Channel>
            <ChannelImage src="https://yt3.ggpht.com/i_QfaDoXmfSH9vyc34LNeOR6QXTDutH8_R3EMZ5RXgC7Q47SeKoR0IAyuayJs5P6MNa-MCYj=s68-c-k-c0x00ffffff-no-rj" />
            <Texts>
              <ChannelName>Lorem ipsum</ChannelName>
              <Subscribe>1tr người đăng kí</Subscribe>
            </Texts>
            <ButtonSub>ĐĂNG KÝ</ButtonSub>
          </Channel>
          <Channel>
            <Texts>
              <ChannelName>Bình luận</ChannelName>
            </Texts>
            <TopComment>
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </TopComment>
          </Channel>
        </Watch>

        <Comments></Comments>
      </Content>
      <Recommendation>Recommendation</Recommendation>
    </Container>
  );
};

export default Video;
