export interface ITreeNode {
	data: any;
	children: ITreeNode[] | null;
	expanded?: boolean;
	level?: number
}
