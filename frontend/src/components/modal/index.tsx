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
import { Button } from '@/components/ui/button'
import './style.scss'

export const Modal = () => {
  return (
    <div>
      <div>
        <div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Arquivo para importação</Button>
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
        </div>

        <div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Show Dialog</Button>
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
                      <label style={{ color: '#FCFCFC' }}>
                        {' '}
                        Lista de links
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
        </div>
      </div>
    </div>
  )
}
