// navigation view.

function drawMenu() { 
    
    let html = '';

    html = /*HTML*/`
    <select onclick="selectPage(this.value)">
    <option>Menu</option>
    <option value="startPage">Start Side</option>
    <option value="profilePage">Profil Side</option>
    <option value="mainPage">Hoved Side</option>
    </select>
    `;
    return html;
}
