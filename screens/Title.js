import { View, Text } from "react-native";
import { getFontFamily } from "../assets/fonts/helper";
import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <View>
      <Text style={{ fontSize: 24, fontFamily: getFontFamily('Inter', '600') }}>{title}</Text>
    </View>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;