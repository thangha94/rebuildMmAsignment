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
        let mount = true;
        const resizeHandle = () => {
            setSum(122);
            console.dir(spanRef.current.innerHTML = '123');
        }
        window.addEventListener('resize', resizeHandle)
        return () => {
            window.removeEventListener('resize', resizeHandle)
        };
    }, [])

    return (
        <div className="about">
            SUM: {sum}
            <button onClick={handlePlus}>Plus</button>
            <span ref={spanRef}></span>
        </div>
    );
};

export default About;