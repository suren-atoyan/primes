import React, { useState } from 'react';

import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

import DoneIcon from '@material-ui/icons/Done';
import CopyIcon from '@material-ui/icons/FileCopy';
import ShareIcon from '@material-ui/icons/Share';

import copy from 'copy-to-clipboard';

const ShareChip = _ => {
  const [isCopied, setIsCopied] = useState();

  function handleClick() {
    copy(window.location.href);
    setIsCopied(true);
  }

  return <Chip
    color={isCopied ? 'primary' : 'secondary'}
    avatar={<Avatar className="non-rounded"><ShareIcon /></Avatar>}
    deleteIcon={isCopied ? <DoneIcon /> : <CopyIcon />}
    onDelete={handleClick}
    onClick={handleClick}
    clickable
    variant="outlined"
    label={isCopied ? 'Copied' : window.location.href.slice(0, 45) + '...'}
  />
};

export default ShareChip;
