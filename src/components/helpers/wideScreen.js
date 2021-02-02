export const isMobileScreen=()=>{
    const offsetWidth = Number(document.documentElement.offsetWidth);
	return offsetWidth >= 1280;
}