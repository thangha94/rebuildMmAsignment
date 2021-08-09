import React, { useEffect, useRef, useState } from 'react';

const About = () => {
    const [sum, setSum] = useState(0);
    const spanRef = useRef(false);

    const handlePlus = () => {
        setTimeout(() => {
            setSum((preSum) => {
                let temp = preSum + 1;
                return temp;
            });
        }, 5000);
    }

    useEffect(() => {
        let str = 'I do not want delete it and add str var';
        let mount = true;

        let newStr = 'another variable';
        const resizeHandle = () => {
            setSum(122);
            console.dir(spanRef.current.innerHTML = '123');
        }
        window.addEventListener('resize', resizeHandle)
        return () => {
            window.removeEventListener('resize', resizeHandle)
        };
    }, [])

    const handleClick = () => {
        console.log('Hello World');
    }

    return (
        <div className="about">
            SUM: {sum}
            <button onClick={handlePlus}>Plus</button>
            <span ref={spanRef}></span>
        </div>
    );
};

export default About;