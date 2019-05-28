import { isDesktop } from 'utils';

function getLayoutSplitterProps(isSettingsSectionOpen) {
  const props = {
    percentage: true,
    primaryIndex: 0,
    secondaryInitialSize: isDesktop ? 30 : isSettingsSectionOpen ? 100 : 0,
    primaryMinSize: isDesktop ? 50 : isSettingsSectionOpen ? 0 : 100,
  };

  if (!isDesktop) {
    props.customClassName = `main-splitter ${isSettingsSectionOpen ? 'settings' : 'graphics'}`;
    props.key = isSettingsSectionOpen; // This is for force update layout splitter
    // in non-desktop devices in those cases when the user clicks to the splitter
    // as there are no other options to do that with current library which provides
    // us layaout-splitting functionality.
  }

  return props;
}

export default getLayoutSplitterProps;
