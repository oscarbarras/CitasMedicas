<style scoped>
  ul {
    position: relative;
    display: flex;
    gap: 25px;
  }

  ul li {
    position: relative;
    list-style: none;
    width: 45px;
    height: 45px;
    background: #fffffff1;
    border-radius: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transition: 0.5s;
  }

  ul li:hover {
    width: 180px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0);
  }

  ul li::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 60px;
    background: linear-gradient(45deg, var(--i), var(--j));
    opacity: 0;
    transition: 0.5s;
  }

  ul li:hover::before {
    opacity: 1;
  }

  ul li::after {
    content: "";
    position: absolute;
    top: 10px;
    width: 100%;
    height: 100%;
    border-radius: 60px;
    background: linear-gradient(45deg, var(--i), var(--j));
    transition: 0.5s;
    filter: blur(15px);
    z-index: -1;
    opacity: 0;
  }

  ul li:hover::after {
    opacity: 0.5;
  }

  ul li .icon {
    color: #777;
    font-size: 1.75em;
    transition: 0.5s;
    transition-delay: 0.25s;
  }

  ul li:hover .icon {
    transform: scale(0);
    color: #fff;
    transition-delay: 0s;
  }

  ul li span {
    position: absolute;
  }

  ul li .title {
    color: #fff;
    font-size: 1.1em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transform: scale(0);
    transition: 0.5s;
    transition-delay: 0s;
  }

  ul li:hover .title {
    transform: scale(1);
    transition-delay: 0.25s;
  }
</style>

<template>
  <ul>
    <li style="--i:#28a745;--j:#28a745;">
      <span class="icon">🏠</span>
      <span class="title">Inicio</span>
    </li>
  </ul>
</template>
