function getResource(path: string, fileName: string): string {
	return path + fileName;
}

const ImagePublicRootPath: string = '/static/images/';
export function getPublicImageResource(fileName: string): string {
	return getResource(ImagePublicRootPath, fileName);
}

const AvaPublicRootPath: string = '/static/images/AvatarMembers/';
export function getPublicAvatarMember(fileName: string): string {
	return getResource(AvaPublicRootPath, fileName);
}
