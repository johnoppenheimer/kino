import Label from 'components/UI/Label';
import Modal from 'components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { selectContent } from 'store/content/actions';

const ContentModal = () => {
    const dispatch = useDispatch();
    const selectedContent = useSelector((state: RootState) => state.contents.selectedContent);

    const onRequestClose = () => {
        dispatch(selectContent());
    };

    return (
        <Modal isOpen={selectedContent != null} onRequestClose={onRequestClose} contentLabel="Content Modal">
            {selectedContent != null && (
                <div>
                    <div className="flex flex-row">
                        <img className="w-64" src={selectedContent.remotePoster} />
                        <div className="ml-4">
                            <Label.Title>
                                {selectedContent.title} ({selectedContent.year})
                            </Label.Title>
                            <p>{selectedContent.overview}</p>
                        </div>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default ContentModal;
