import { useGeneralStore } from "@stores/generalStore";
import type { FunctionalComponent } from "vue";

const component: FunctionalComponent = () => {
    const { navToggle } = useGeneralStore();

    return <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a onClick={navToggle} href="#home" class="nav__link">Home</a>
                    </li>
                    <li class="nav__item">
                        <a onClick={navToggle} href="#services" class="nav__link">My Services</a>
                    </li>
                    <li class="nav__item">
                        <a onClick={navToggle} href="#about" class="nav__link">About me</a>
                    </li>
                    <li class="nav__item">
                        <a onClick={navToggle} href="#work" class="nav__link">My Work</a>
                    </li>
                </ul>
            </nav>
}

export default component;