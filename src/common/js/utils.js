
/**
 * 设置根HTML font-size
 */
export function setHtmlSize() {
	let iW =window.innerWidth; // screen.width;
  	document.getElementsByTagName("html")[0].style.fontSize = iW / 3.75 + "px";
}
