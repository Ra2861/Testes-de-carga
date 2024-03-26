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

export const SheetsTable = () => {
  return (
    <div>
      <div className="topBlockDiv">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="newSearchButton">
              <p style={{ fontSize: '13px' }}>IMPORTAR PLANILHA</p>
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
                <p
                  className="dialog-title"
                  style={{ color: '#FCFCFC', fontSize: 17 }}
                >
                  Selecione um arquivo para importação
                </p>
              </AlertDialogTitle>
              <AlertDialogDescription style={{}}>
                <div style={{ fontSize: 15, paddingTop: 30 }}>
                  <strong>Arquivo selecionado:</strong> Planilha satisfação
                  agosto.xlsx
                </div>

                <div style={{ fontSize: 15, paddingTop: 30 }}>
                  <strong>
                    Você confirma que todos os dados estão corretos?
                  </strong>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      padding: 10,
                    }}
                  >
                    <div style={{}}>
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                        style={{}}
                      />
                      <label style={{ color: '#FCFCFC', cursor: 'pointer' }}>
                        Sim
                      </label>
                      <br></br>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                      <label style={{ color: '#FCFCFC' }}>Não</label>
                      <br></br>
                    </div>
                  </div>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter
              style={{
                display: 'flex',
                justifyContent: 'center',
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
                Importar
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
          <div className="tableInfos">Planilha satisfação agosto</div>
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
          <div className="tableTitles">Tamanho</div>
          <div className="blackLineDiv" />
          <div className="tableInfos">25kb</div>
          <div className="blackLineDivLow" />
        </div>
        <div className="tableInfoSpaces">
          <div className="tableTitles">Importado em</div>
          <div className="blackLineDiv" />
          <div className="tableInfos">29/02/2024</div>
          <div className="blackLineDivLow" />
        </div>
      </div>
    </div>
  )
}
