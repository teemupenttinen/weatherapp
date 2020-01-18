const epochConverter = (time) => {
    if (!time) {
        return;
    }
    return new Date(time * 1000).toTimeString().slice(0, 5);
}

const _epochConverter = epochConverter;
export { _epochConverter as epochConverter };