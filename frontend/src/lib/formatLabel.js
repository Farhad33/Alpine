
export const formatLabel = (str) => {
    let label = str.split('_')
    label = label.map((part) => {
            part = part.split('')
            part[0] = part[0].toUpperCase()
            return part.join('')
        })
    return label.join(' ')
}