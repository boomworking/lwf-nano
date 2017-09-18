import React from 'react';
import { translate } from 'react-i18next';
import { TooltipWrapper } from '../timestamp';
import sytles from './transactions.css';
import ClickToSend from '../clickToSend';

const TransactionType = (props) => {
  const t = props.t;
  let type;
  switch (props.type) {
    case 1:
      type = t('Second Signature Creation');
      break;
    case 2:
      type = t('Delegate Registration');
      break;
    case 3:
      type = t('Vote');
      break;
    case 4:
      type = t('Multisignature Creation');
      break;
    case 5:
      type = t('Blockchain Application Registration');
      break;
    case 6:
      type = t('Send Lisk to Blockchain Application');
      break;
    case 7:
      type = t('Send Lisk from Blockchain Application');
      break;
    default:
      type = false;
      break;
  }
  const address = props.address !== props.senderId ? props.senderId : props.recipientId;
  const template = type ?
    <span className={sytles.smallButton}>{type}</span> :
    <ClickToSend recipient={address} className='from-to' >
      <TooltipWrapper tooltip={t('Send to this address')}>{address}</TooltipWrapper>
    </ClickToSend>;
  return template;
};

export default translate()(TransactionType);
