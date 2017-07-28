const template = (text) => {
    console.log(text)
    return {
        type: 'SAY_HELLO', //type of action for reducer,
        payload: text

    };
};
export default template;
