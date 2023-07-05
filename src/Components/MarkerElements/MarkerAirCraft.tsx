import "./MarkersSvgsS.scss";

export const banditJetElement = (id: string | number) => {
    const el = document.createElement("div");
    el.className = `bandit-jet id:${id}`;
    return el;
};

export const angelJetElement = (id: string | number) => {
    const el = document.createElement("div");
    el.className = `angel-jet id:${id}`;
    return el;
};

export const jetElColorUpdate = (tl: number, id: number) => {
    if (tl === 0) {
        document.getElementsByClassName(
            `id:${id}`
        )[0].className = `bandit-jet id:${id}`;
    } else {
        document.getElementsByClassName(
            `id:${id}`
        )[0].className = `angel-jet id:${id}`;
    }
};
