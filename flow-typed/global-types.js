import * as React from 'react'

declare type ReactObjRef<ElementType: React.ElementType> = {
	current: null | React.ElementRef<ElementType>, // eslint-disable-line no-undef
}
