import React, { useState } from 'react';
const Home = () => {
  const [OtherC, setOtherC] = useState(null);
  const change = () => {
    console.log('changed');
    import('./OtherComponent').then(mod => {
      console.log(mod);
      return setOtherC(mod.default);
    })
  }
  return (
    <div>
      Home content
      <button onClick={change}>Show</button>
      {OtherC && OtherC}
    </div>
  );
};

export default Home;