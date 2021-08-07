const defaults = {
	classname: 'js'
}

export function enhance(node, options = {}) {
	const { classname } = { ...defaults, ...options }

	node.classList.add(classname)
}