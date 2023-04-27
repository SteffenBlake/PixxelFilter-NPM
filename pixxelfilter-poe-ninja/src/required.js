export default function required(name) {
    throw new Error(`${name} is required`);
}  