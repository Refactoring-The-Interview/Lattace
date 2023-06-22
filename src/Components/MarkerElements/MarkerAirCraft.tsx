import "./MarkersSvgsS.scss";

export const banditJetElement = () => {
    const el = document.createElement("div");
    el.className = "bandit-jet";
    return el;
};

export const FriendlyJetElement = () => {
    const el = document.createElement("div");
    el.className = `friendly-jet ${Math.random()}`;
    return el;
};
