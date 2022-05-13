import React from 'react'

export function taskHrefFormDataEntryValues(event: React.FormEvent<HTMLFormElement>) {
    const data = new FormData(event.currentTarget)

    const href = String(data.get('taskHref') as FormDataEntryValue)
    const shortName = String(data.get('shortName') as FormDataEntryValue)
    const isMain = Boolean(data.get('isMain') as FormDataEntryValue)

    return {href,shortName,isMain}
}