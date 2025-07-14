import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { EditableProfileCard, getProfileForm } from '@/features/EditableProfileCard';
import { Text } from '@/shared/ui/Text/Text';
import { ProfileRating } from '@/features/ProfileRating';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation();
    const formData = useSelector(getProfileForm);

    if (!id) {
        return <Text text={t('Профиль не найден')} />;
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
                {formData && <ProfileRating profileId={id} />}
            </VStack>
        </Page>
    );
};

export default ProfilePage;
