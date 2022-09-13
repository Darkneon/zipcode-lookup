import { IconButton, IconButtonProps, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { formatCityState, formatCountryZipCode } from '@/features/ZipCode/lib';
import { HistoryItem } from '@/types/history';

type Props = {
    item: HistoryItem
    removeFromHistory: (index: string) => void
}

const DeleteButton = (props: IconButtonProps) => <IconButton edge="end" aria-label="delete" {...props}>
    <DeleteIcon data-testid={'delete-button'} />
</IconButton>

function HistoryListItem({ item, removeFromHistory }: Props) {
    return <ListItem disablePadding secondaryAction={<DeleteButton onClick={() => removeFromHistory(item.key)} />}>
        <ListItemText primary={formatCountryZipCode(item)} secondary={formatCityState(item)} />
    </ListItem>
}

export default React.memo(HistoryListItem);