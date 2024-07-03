import { MaterialIcons } from "@expo/vector-icons"
import { Box } from "./Box"
import { Typograph } from "./Typograph"
import { fontSize } from "../constants/fontSize"
import { fontWeight } from "../constants/fontWeight"
import { spacing } from "../constants/spacing"

export const Empty = ({
    title,
    subtitle,
}) => {

    return (
        <Box center style={{ width: 240, height: 240, marginBottom: spacing.s42 + spacing.s24, gap: spacing.s12 }}>
            <MaterialIcons name="filter-none" size={64} color="black" />
            <Box fullW style={{ alignItems:"center"}}>
                <Typograph center size={fontSize.s18} weight={fontWeight["500"]}>{title}</Typograph>
                <Typograph center size={fontSize.s16} weight={fontWeight["400"]}>{subtitle}</Typograph>

               
            </Box>
        </Box>
    )
}