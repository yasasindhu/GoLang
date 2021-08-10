import React from "react";

import TransactionCard from "./index";
import DownloadImg from '../../../../public/images/Frame 11.png';
export default {
    title: "molecules/Transaction Card",
    component: TransactionCard,
};

const Template = (args) => <TransactionCard {...args} />;

export const PrimaryTransactionCard = Template.bind({});


PrimaryTransactionCard.args = {
    job:{
    logo :DownloadImg ,
    currency : 'Bitcoin BTC',
    status: 'Success',
    amount:'$345,678,945',
    CurrencyType:'BTC'
    
    }
};