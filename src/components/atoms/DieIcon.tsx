import {
  GiD4 as D4,
  GiPerspectiveDiceSixFacesSix as D6,
  GiDiceEightFacesEight as D8,
  GiD10 as D10,
  GiD12 as D12,
  GiDiceTwentyFacesTwenty as D20,
} from "react-icons/gi";

import { FaDice as DAny } from "react-icons/fa";
import { IconBaseProps } from "react-icons";

export default function DieIcon({
  faces,
  iconProps,
}: {
  faces: number;
  iconProps?: IconBaseProps;
}) {
  switch (faces) {
    case 4:
      return <D4 {...iconProps} />;

    case 6:
      return <D6 {...iconProps} />;

    case 8:
      return <D8 {...iconProps} />;

    case 10:
      return <D10 {...iconProps} />;

    case 12:
      return <D12 {...iconProps} />;

    case 20:
      return <D20 {...iconProps} />;

    default:
      return <DAny {...iconProps} />;
  }
}
