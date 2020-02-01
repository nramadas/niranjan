import makeAsync from '../../hoc/makeAsync';
const asyncComponent = makeAsync(
  import('../../pages/Root').then(m => m.default),
);
export default asyncComponent;
