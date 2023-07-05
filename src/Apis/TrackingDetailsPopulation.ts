export const trackingDetails = [
    {
        title: "environment",
        value: "air",
    },
    {
        title: "Heading",
        value: `${Math.floor(Math.random() * 360)}°`,
    },
    {
        title: "speed",
        value: "604.8451 m/s",
    },
    {
        title: "Altitude (MSL)",
        value: `${Math.floor(Math.random() * 10000)} m`,
    },
    {
        title: "Sensors",
        value: "Radar",
    },
    {
        title: "Time since Creation",
        value: () => {
            const creationTime = new Date().getSeconds();
            const currentTime = setInterval(() => {
                return new Date().getSeconds();
            }, 1000);
            return (currentTime as any) - creationTime;
        },
    },
    {
        title: "Last Updated",
        value: "00:00:01",
    },
    {
        title: "estimated Strength",
        value: "1",
    },
];
