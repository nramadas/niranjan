import makeAsync from '../../hoc/makeAsync';
const asyncComponent = makeAsync(import('./index').then(m => m.default));
export default asyncComponent;
