const removeTags = document.querySelector('.removeAllTags'),
remainingTags = document.querySelector('.remainingTags'),
addTag = document.querySelector('.addTag'),
tags = document.querySelector('.tags');

let addedTags = [];

const remainingTagsCount = () => {
    remainingTags.textContent = 10 - addedTags.length;
}

const deleteTag = (e, tagName) => {
    e.remove();
    let remFromArray = addedTags.indexOf(tagName);
    addedTags = [...addedTags.slice(0, remFromArray), ...addedTags.slice(remFromArray + 1)];
    remainingTagsCount();
    console.log(addedTags);
}


document.body.addEventListener('keydown', (e) => {
    if(e.keyCode === 13) {
        let tagName = addTag.value;
        if(addedTags.includes(tagName) || addedTags.length >= 10) {
            return;
        }
        addedTags.push(tagName);
        let tagTemp = `<div class="tag" onclick="deleteTag(this, '${tagName}')">
                            <span class="tagName">${tagName}</span>
                            <span class="removeTag">X</span>
                        </div>`
        tags.innerHTML += tagTemp;
        addTag.value = "";
    }
    remainingTagsCount();
})

removeTags.addEventListener('click', () => {
    const tag = document.querySelectorAll('.tag');
    console.log(tag)
    tag.forEach(tag => tag.remove())
})
