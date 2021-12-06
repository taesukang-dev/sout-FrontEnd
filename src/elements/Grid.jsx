import styled from "styled-components";

const Grid = (props) => {
  const {
    children,
    width,
    height,
    padding,
    flex,
    side_flex,
    margin,
    border,
    bg,
    shadow,
    radius,
  } = props;
  const styles = {
    width,
    height,
    padding,
    flex,
    side_flex,
    margin,
    border,
    bg,
    shadow,
    radius,
  };

  return (
    <>
      <GridBox {...styles}>{children}</GridBox>
    </>
  );
};

Grid.defaultProps = {
  flex: false,
  side_flex: false,
  width: "100%",
  height: "",
  padding: "",
  margin: "",
  border: "",
  bg: "",
  shadow: false,
  radius: false,
};

const GridBox = styled.div`
  ${(props) => (props.radius ? "border-radius:5px;" : "")}
  ${(props) =>
    props.shadow
      ? "box-shadow:rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;"
      : ""}
  border: ${(props) => props.border};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  background: ${(props) => props.bg};
  ${(props) =>
    props.flex
      ? "display: flex; align-items: center; justify-content: center; flex-direction: column;"
      : ""}
  ${(props) =>
    props.side_flex
      ? "display: flex; align-items: center; justify-content: space-between;"
      : ""}
`;

export default Grid;
