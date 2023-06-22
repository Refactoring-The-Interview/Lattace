import "./MarkersSvgsS.scss";

export const banditJetElement = () => {
    const el = document.createElement("svg");
    el.className = "bandit-jet";
    return el;
};

export const FriendlyJetElement = () => {
    const el = document.createElement("svg");
    el.className = "friendly-jet";
    return el;
};
