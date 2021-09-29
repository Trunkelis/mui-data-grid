import { memo } from "react";
import { TableRow, TableCell } from "@mui/material";

import { TruncateText } from "../helpers";
import { useTableStore } from "../store";
import { VirtualRowProps, RenderCell } from "../typings";

export const VirtualRow = memo((props: VirtualRowProps) => {
    const { columns, row, index, truncate } = props;

    const fontSize = useTableStore(store => store.state.fontSize);

    const renderField = (field: string, renderCell?: RenderCell) => {
        if (renderCell) {
            return (
                <>
                    {renderCell({
                        index,
                        data: row?.[field] ?? "",
                    })}
                </>
            );
        }
        return row?.[field]?.toString();
    };

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <TableRow sx={{ display: "flex" }} component="div" hover>
                {columns.map(({ field, flex, width, renderCell }, i) => (
                    <TableCell
                        component="div"
                        key={i}
                        sx={{
                            flex: !width && !flex ? 1 : flex,
                            width,
                            wordBreak: "break-word",
                        }}
                    >
                        <div style={{ fontSize: `${fontSize}em` }}>
                            {!!truncate ? (
                                <TruncateText
                                    obj={renderField(field, renderCell)}
                                    {...truncate}
                                />
                            ) : (
                                <>{renderField(field, renderCell)}</>
                            )}
                        </div>
                    </TableCell>
                ))}
            </TableRow>
        </div>
    );
});