import {toast} from "react-toastify";
import {addComment} from "./Firebase";

function sortFunction(a, b) {
	if (a[0] === b[0]) {
		return 0;
	}
	else {
		return (a[0] > b[0]) ? -1 : 1;
	}
}

export function generateCommentArray(comments) {
	let commentArray = [];
	for (let key in comments) {
		let value = comments[key];
		commentArray.push([key, value]);
	}
	commentArray.sort(sortFunction);
	return commentArray;
}

export function toggleWriteComment(recipeID, comments, setComments) {
	const enteredComment = document.getElementById("inputComment").value;
	if (!isBlank(enteredComment)) {
		saveComment(recipeID, comments, setComments, enteredComment);
		document.getElementById("inputComment").value = '';
		toast.success('Erfolgreich gespeichert', {position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined});
	} else {
		toast.warn('Keine Eingabe!', {position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined});
	}

}

function saveComment(recipeID, comments, setComments, comment) {
	const newID = Date.now();
	addComment(recipeID, comment, newID);
	setComments({...comments, [newID]: comment});
}

export function isBlank(str) {
	return (!str || /^\s*$/.test(str));
}