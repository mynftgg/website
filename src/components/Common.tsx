import { useDispatch } from "react-redux";
import styled from "styled-components";
import { InView } from "react-intersection-observer";

import { setSectionVisibility } from "../state/scrollPositionSlice";

export const Spacer = styled.div`
  flex-grow: 1;
`;

export const InViewTracker = (props: any) => {
  const dispatch = useDispatch();

  const onInViewChange = (inView: boolean) => {
    dispatch(setSectionVisibility({
      sectionName: props.sectionName,
      isVisible: inView
    }));
  };

  return (
    <InView onChange={onInViewChange} rootMargin="-80px 0px 0px">
      {props.children}
    </InView>
  );
};
