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
    min_height,
    borderBottom,
    min_width,
    max_width,
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
    min_height,
    borderBottom,
    min_width,
    max_width,
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
  radius: "",
  min_height: "",
  radius: "",
  min_height: "",
  min_width: "",
  max_width: "",
  borderBottom: false,
};

const GridBox = styled.div`
  border-radius: ${(props) => props.radius};
  ${(props) =>
    props.borderBottom
      ? "border-bottom: 1px solid #ddd; box-shadow: 2px 2px 2px #ddd;"
      : ""}
  ${(props) =>
    props.shadow
      ? "box-shadow:rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;"
      : ""}
  ${(props) =>
    props.border
      ? "border-bottom: 1px solid #ddd; box-shadow: #ddd 0px 0px 10px;"
      : ""};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  background: ${(props) => props.bg};
  min-height: ${(props) => props.min_height};
  min-width: ${(props) => props.min_width};
  max-width: ${(props) => props.max_width};
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
