const style = {
  navbar: {
    position: "relative",
    zIndex: 1,
    backgroundColor: "white",
  },
  navItem: {
    paddingLeft: "20px",
    paddingRight: "20px",
    listStyleType: "none",
    fontSize: "12px",
    letterSpacing: "2px",
    fontWeight: 600,
  },
  icon: { color: "#d8272e", fontSize: "16px" },
  navLink: { textDecoration: "none", color: "#d8272e" },
  lang: {
    borderLeft: "#d8272e solid 1px",
    borderRight: "#d8272e solid 1px",
  },
  navImg: { height: "38px", aspectRatio: "auto 188/38", width: "188px" },
  navButton: {
    display: "block",
    color: "#d8272e",
    border: "none",
    fontSize: "30px",
  },
  iconList: {
    minWidth: "350px",
  },
  "@media  (max-width: 991px)": {
    iconList: {
      minWidth: "46px",
    },
  },
};

export default style;
