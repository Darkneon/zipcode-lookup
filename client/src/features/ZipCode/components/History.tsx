import { Button, List, Stack } from '@mui/material';
import HistoryListItem from './HistoryListItem';
import { HistoryItem } from '@/types/history';

type Props = {
    items: HistoryItem[]
    maxItems?: number
    clearHistory: Function
    removeFromHistory: (index: string) => void
}

function History({ items = [], removeFromHistory, clearHistory }: Props) {
    const historyCleared = () => clearHistory();

    return <>
        <List>
            {
                items.map((item) =>
                    <HistoryListItem key={item.key} item={item} removeFromHistory={removeFromHistory} />)
            }
        </List>

        {items.length > 0 && <Stack direction="row" justifyContent="end">
            <Button variant="outlined" size="small" onClick={historyCleared}>
                Clear all
            </Button>
        </Stack>}
    </>
}

export default History;