import React from "react";
import { Input, Button, Grid } from "../elements/index";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators } from "../redux/modules/post";

const PostWrite = (props) => {
  const [content, setContent] = React.useState("");
  const [url, setUrl] = React.useState("");
  const post = { content, url };

  const dispatch = useDispatch();

  const addPost = () => {
    dispatch(actionCreators.newPost(post));
    history.push("/");
  };

  const data = useSelector((state) => state);
  console.log(post);
  if (post === null) {
    window.alert("내용을 입력해주세요!");
    return;
  }

  return (
    <React.Fragment>
      <Grid
        radius="5px"
        shadow
        flex
        width="80%"
        margin="10vh auto"
        border="1px solid black"
        padding="50px"
        bg="#262223"
      >
        <Input
          _onChange={(e) => {
            setContent(e.target.value);
          }}
          multiLine
          label="내용"
          placeholder="자신의 이야기를 입력해주세요 :)"
        ></Input>
        <Input
          _onChange={(e) => {
            setUrl(e.target.value);
          }}
          label="업로드 링크"
          placeholder="도움이 되는 링크를 공유해주세요!"
        ></Input>
        <Button
          color="#262223"
          bg="#ddc6b6"
          _onClick={addPost}
          padding="10px 20px"
        >
          작성하기
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
