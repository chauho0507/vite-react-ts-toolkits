import { ESystemLanguages } from "@enums/common"
import { useAppDispatch, useAppSelector } from "@hooks/hooks"
import {
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material"
import { changeSystemLanguage } from "@redux/slices/commonSlice"
import { useTranslation } from "react-i18next"
import CommonLoadingIcon from "@components/icons/LoadingIcon"

const HomePage = () => {
  const { t, i18n } = useTranslation()
  const dispatch = useAppDispatch()
  const { language } = useAppSelector((state) => state.common)

  const changeLanguageHandler = (
    event: React.MouseEvent<HTMLElement>,
    selectedLanguage: ESystemLanguages,
  ) => {
    if (language === selectedLanguage) {
      return event.stopPropagation()
    }
    i18n.changeLanguage(selectedLanguage)
    dispatch(changeSystemLanguage(selectedLanguage))
  }

  return (
    <Stack direction="column" alignItems="start">
      <Typography variant="h3" className="self-center">
        {t("home_page.demo.main_title")}
      </Typography>
      <Typography variant="h5" className="self-center">
        {t("home_page.demo.title", {
          name: "ChauHH",
        })}
      </Typography>
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        className="self-start"
      >
        <Typography>{t("home_page.demo.loading_icon_desc")}</Typography>
        <CommonLoadingIcon />
      </Stack>
      <Button variant="contained">Login</Button>
      <ToggleButtonGroup
        color="primary"
        value={language}
        exclusive
        onChange={changeLanguageHandler}
        aria-label="Platform"
      >
        <ToggleButton
          disabled={language === ESystemLanguages.EN}
          value={ESystemLanguages.EN}
        >
          EN
        </ToggleButton>
        <ToggleButton
          disabled={language === ESystemLanguages.JA}
          value={ESystemLanguages.JA}
        >
          JA
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  )
}

export default HomePage
