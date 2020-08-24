import React from "react";
import Avatar from "antd/lib/avatar";
//helpers
import get from 'lodash/get';
import trim from 'lodash/trim';
import isEmpty from 'lodash/isEmpty';
import isObject from 'lodash/isObject';

const AvatarUser = (props) => {
    const {user} = props;

    const firstName = get(user,'firstname','');
    const lastName = get(user,'lastname','');

    const fChar = trim(isObject(firstName) ? firstName.value.charAt(0) : firstName.charAt(0));
    const lChar = trim(isObject(lastName) ? lastName.value.charAt(0) : lastName.charAt(0));

    if(isEmpty(fChar) && isEmpty(lChar)){
        const propsAvatarDefault = {
            size: 32,
            icon: 'user',
            style: {opacity: .5}
        };

        return (
            <Avatar {...propsAvatarDefault}/>
        );
    }

    const propsAvatarActive = {
        size: 32,
        style: {},
        children:`${fChar}${lChar}`
    };

    return (
        <Avatar {...propsAvatarActive}/>
    );

};

export default AvatarUser;