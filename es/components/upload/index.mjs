import '../../utils/index.mjs';
import Upload from './src/upload.mjs';
export { genFileId, uploadBaseProps, uploadListTypes, uploadProps } from './src/upload2.mjs';
export { uploadContentProps } from './src/upload-content.mjs';
export { uploadListEmits, uploadListProps } from './src/upload-list2.mjs';
export { uploadDraggerEmits, uploadDraggerProps } from './src/upload-dragger2.mjs';
import { withInstall } from '../../utils/vue/install.mjs';

const ElUpload = withInstall(Upload);

export { ElUpload, ElUpload as default };
//# sourceMappingURL=index.mjs.map
