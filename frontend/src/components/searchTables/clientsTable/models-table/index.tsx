import './style.scss'
import '../../../modal/style.scss'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

export const ModelsTable = () => {
  return (
    <div>
      <div className="topBlockDiv">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="newSearchButton">
              <p style={{ fontSize: '13px' }}>CRIAR NOVO MODELO</p>
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent
            style={{
              height: 385,
              width: 736,
              borderRadius: 10,
              backgroundColor: '#323232',
              justifyContent: 'center',
            }}
          >
            <AlertDialogHeader>
              <AlertDialogTitle>
                <p style={{ color: '#FCFCFC' }}>
                  Em quais canais de comunicação você deseja distribuir sua
                  pesquisa?
                </p>
              </AlertDialogTitle>
              <AlertDialogDescription
                style={{
                  display: 'flex',
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    margin: 30,
                  }}
                >
                  <div>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <label style={{ color: '#FCFCFC' }}> Whatsapp</label>
                    <br></br>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <label style={{ color: '#FCFCFC' }}> E-mail</label>
                    <br></br>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <label style={{ color: '#FCFCFC' }}> SMS link</label>
                    <br></br>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    margin: 30,
                  }}
                >
                  <div>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <label style={{ color: '#FCFCFC' }}> Lista de links</label>
                    <br></br>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <label style={{ color: '#FCFCFC' }}>Links</label>
                    <br></br>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <label style={{ color: '#FCFCFC' }}> QR code</label>
                    <br></br>
                  </div>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: 70,
              }}
            >
              <AlertDialogAction
                style={{
                  backgroundColor: '#05cd78',
                  color: '#FCFCFC',
                  width: '158',
                  height: '52',
                  borderRadius: '5',
                }}
              >
                Confirmar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <input className="searchInput" placeholder="Procurar" type="text" />
      </div>
      <div className="bottonBlockDiv">
        <div className="tableInfoSpaces">
          <div className="tableTitles">Nome</div>
          <div className="blackLineDiv" />
          <div className="tableInfos">Teste</div>
          <div className="blackLineDivLow" />
        </div>
        <div className="tableInfoSpaces">
          <div className="tableTitles"></div>
          <div className="blackLineDiv" />
          <div className="tableInfos"></div>
          <div className="blackLineDivLow" />
        </div>
        <div className="tableInfoSpaces">
          <div className="tableTitles"></div>
          <div className="blackLineDiv" />
          <div className="tableInfos"></div>
          <div className="blackLineDivLow" />
        </div>
        <div className="tableInfoSpaces">
          <div className="tableTitles"></div>
          <div className="blackLineDiv" />
          <div className="tableInfos"></div>
          <div className="blackLineDivLow" />
        </div>
        <div className="tableInfoSpaces">
          <div className="tableTitles">Criado em</div>
          <div className="blackLineDiv" />
          <div className="tableInfos">29/02/2024</div>
          <div className="blackLineDivLow" />
        </div>
      </div>
    </div>
  )
}
