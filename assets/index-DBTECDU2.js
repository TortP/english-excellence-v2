(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const d=document.querySelector("#menu-open-button"),l=document.querySelector("#menu-close-button"),s=document.querySelector("#mobile-menu"),n=document.querySelector("#backdrop");function a(){s.classList.add("menu-is-open"),n.classList.remove("backdrop-hidden")}function i(){s.classList.remove("menu-is-open"),n.classList.add("backdrop-hidden")}d.addEventListener("click",a);l.addEventListener("click",i);n.addEventListener("click",i);
